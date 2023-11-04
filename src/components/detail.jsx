const Detail = ({title,type,placeholder,handleChange,name}) => {
  return (
    <div>
        <h1>{title}</h1>
        <input type={type} placeholder={placeholder} onChange={handleChange} name={name}/>
    </div>
  )
}

export default Detail