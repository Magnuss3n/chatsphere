const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
    return (
        <div className='flex pt-4 pl-4'>
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
                    <span className="label-text">Male</span>
                    <ion-icon name="man-outline"></ion-icon>
                    <input type='checkbox' className="checkbox bg-blue-500 border-gray-500"
                        checked={selectedGender === 'male'}
                        onChange={() => onCheckboxChange("male")} />
                </label>
            </div>
            <div className='form-control pl-4'>
                <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
                    <span className="label-text">Female</span>
                    <ion-icon name="woman-outline"></ion-icon>
                    <input type='checkbox' className="checkbox bg-red-400 border-slate-500"
                        checked={selectedGender === 'female'}
                        onChange={() => onCheckboxChange("female")} />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckbox