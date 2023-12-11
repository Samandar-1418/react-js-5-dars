import './index.css'
export default function Textarea(props) {
  const { title, placeholder, isRequired, name, id} = props;
  return (
<div className='textarea-wrapper '>
<label className='input-label' htmlFor={id}>
  {title} &nbsp; 
 { isRequired && <span>*</span>}
 </label>
 <textarea className='discription' name={name} id={id} placeholder={placeholder}></textarea>
</div>
    )
}
