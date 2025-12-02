import {useState,useEffect} from "react";
import {fetchApplication,saveApplication,submitApplication} from "./api";
export default function AppForm({id}){
  const [app,setApp]=useState(null);
  const [form,setForm]=useState({});
  useEffect(()=>{ fetchApplication(id).then(d=>{setApp(d);setForm(d);});},[id]);
  if(!app) return <>Loading...</>;
  const ro=app.status==="submitted";
  return (<div>
    <h1>Application #{app.id}</h1>
    <input disabled={ro} value={form.first_name||""}
      onChange={e=>setForm({...form,first_name:e.target.value})}/>
    <input disabled={ro} value={form.last_name||""}
      onChange={e=>setForm({...form,last_name:e.target.value})}/>
    <input disabled={ro} value={form.email||""}
      onChange={e=>setForm({...form,email:e.target.value})}/>
    {!ro && <>
      <button onClick={()=>saveApplication(app.id,form)}>Save</button>
      <button onClick={()=>submitApplication(app.id)}>Submit</button>
    </>}
    {ro && <p>Submitted - Read Only</p>}
  </div>);
}