
function Select({label,options,register,name,required, ...props}) {
    return (
        <>
            <label>{label}</label>
            <select {...register(name,{required:required})} className="form-control">
            <option value="">--- Select Your {label} ---</option>
                {
                    options.map(opt => {
                        return <option key={opt}>{opt}</option>
                    })
                }
            </select>
        </>
    )
}

export default Select;