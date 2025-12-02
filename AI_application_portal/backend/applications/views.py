from rest_framework import viewsets,permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Application
from .serializers import ApplicationSerializer
from .services import sync_to_crm,extract_data_from_document,suggest_text_improvement

class ApplicationViewSet(viewsets.ModelViewSet):
    serializer_class=ApplicationSerializer
    permission_classes=[permissions.AllowAny]
    def get_queryset(self): return Application.objects.all()
    def perform_create(self,serializer): serializer.save(status='draft')
    def perform_update(self,serializer):
        if serializer.instance.status=='submitted':
            raise PermissionError('Cannot edit a submitted application.')
        serializer.save()
    @action(detail=True,methods=['post'])
    def submit(self,request,pk=None):
        app=self.get_object()
        if app.status=='submitted':
            return Response({'detail':'Already submitted.'},status=400)
        app.crm_id=sync_to_crm(app); app.status='submitted'; app.save(update_fields=['crm_id','status'])
        return Response(self.get_serializer(app).data)
    @action(detail=True,methods=['post'])
    def parse_document(self,request,pk=None):
        app=self.get_object()
        f=request.FILES.get('file')
        if not f: return Response({'error':'File required'},status=400)
        data=extract_data_from_document(f)
        ser=self.get_serializer(app,data=data,partial=True)
        ser.is_valid(raise_exception=True); ser.save()
        return Response(ser.data)
    @action(detail=True,methods=['post'])
    def ai_suggest(self,request,pk=None):
        app=self.get_object()
        text=request.data.get('text','')
        suggestion=suggest_text_improvement(text)
        return Response({'application_id':app.id,'original':text,'suggestion':suggestion})
