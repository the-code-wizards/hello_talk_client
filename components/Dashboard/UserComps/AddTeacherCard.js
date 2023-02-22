import React from 'react';

const AddTeacherCard = ({applied, refetch}) => {
    const date = new Date();

    const {name, email, qualification, details, image, _id} = applied;
    const handleAcceptTeacher = () => {
        const teacherInfo = {
            name,
            email,
            qualification,
            details,
            image,
            joiningDate: date,
            teacherId: _id
        }

        fetch(`https://hello-talk-webserver.vercel.app/addteacher`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(teacherInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('Teacher added')
                refetch
            }
        })
      }

      const handleDeleteApp = () => {
        fetch(`https://hello-talk-webserver.vercel.app/deleteApply?email=${email}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('Application deleted')
            }
        })
      }

    return (
        <div >
          <div className='flex gap-2'>
          <div className='w-[220px]'>
            <img className='h-[120px] w-[120px] rounded-xl' src={applied?.image} alt={applied?.name} />
          </div>
          <div>
            <h2 className="text-xl font-bold">{applied.name}</h2>
            <h5 className='text-md font-bold text-[#1d4d87]'>{applied.qualification}</h5>
            <p>
              {applied.details}
            </p>
          </div>
        </div>

        {/* action button for admit  */}
        <div className='flex gap-2 justify-end'>
              <button onClick={handleAcceptTeacher} className='btn btn-sm bg-[#2C5F9E] border-b-4 border-[#2a5488]'>Accept</button>
              <button onClick={handleDeleteApp} className='btn btn-sm bg-[#f53a3a] border-b-4 border-[#b61825]'>Deny</button>
          </div>
        </div>
    );
};

export default AddTeacherCard;