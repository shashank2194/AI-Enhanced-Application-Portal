import {useState,useEffect} from 'react';
import {fetchApplication,saveApplication,submitApplication,getAISuggestion} from './api';

export default function ApplicationForm({id}){
  const [app,setApp]=useState(null);
  const [form,setForm]=useState({});
  const [aiSuggestion,setAiSuggestion]=useState('');
  const [error,setError]=useState('');

  useEffect(()=>{
    fetchApplication(id).then(d=>{setApp(d);setForm(d);}).catch(e=>setError(e.message));
  },[id]);

  if(error) return <p style={{color:'red'}}>{error}</p>;
  if(!app) return <p>Loading...</p>;
  const readOnly=app.status==='submitted';

  const change=field=>e=>setForm({...form,[field]:e.target.value});

  const handleSave=()=>{saveApplication(app.id,form).then(setApp).catch(e=>setError(e.message));};
  const handleSubmit=()=>{submitApplication(app.id).then(setApp).catch(e=>setError(e.message));};
  const handleAi=()=>{getAISuggestion(app.id,form.first_name||'').then(r=>setAiSuggestion(r.suggestion)).catch(e=>setError(e.message));};

  return (
    <div>
      <h1>Application #{app.id}</h1>
      <input disabled={readOnly} value={form.first_name||''} onChange={change('first_name')} placeholder="First Name"/>
      <input disabled={readOnly} value={form.last_name||''} onChange={change('last_name')} placeholder="Last Name"/>
      <input disabled={readOnly} value={form.email||''} onChange={change('email')} placeholder="Email"/>
      {!readOnly && <>
        <button onClick={handleSave}>Save</button>
        <button onClick={handleSubmit}>Submit</button>
      </>}
      {readOnly && <p>Submitted - read only</p>}
      <hr/>
      <h3>AI Assistant Demo</h3>
      <button onClick={handleAi}>Get AI Suggestion for First Name</button>
      {aiSuggestion && <p>{aiSuggestion}</p>}
    </div>
  );
}
