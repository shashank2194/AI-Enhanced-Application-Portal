export async function fetchApplication(id){
  const res=await fetch(`/api/applications/${id}/`);
  if(!res.ok) throw new Error('Failed to load');
  return res.json();
}
export async function saveApplication(id,data){
  const res=await fetch(`/api/applications/${id}/`,{
    method:'PUT',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(data)
  });
  if(!res.ok) throw new Error('Failed to save');
  return res.json();
}
export async function submitApplication(id){
  const res=await fetch(`/api/applications/${id}/submit/`,{method:'POST'});
  if(!res.ok) throw new Error('Failed to submit');
  return res.json();
}
export async function getAISuggestion(id,text){
  const res=await fetch(`/api/applications/${id}/ai_suggest/`,{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({text})
  });
  if(!res.ok) throw new Error('Failed to get AI suggestion');
  return res.json();
}
