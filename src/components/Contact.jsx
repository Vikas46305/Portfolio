import React from 'react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

const Contact = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const HandleChange = (field, e) => {
        setData((pre) => ({
            ...pre,
            [field]: e.target.value
        }))
    }

    const HandleSubmitButton = () => {
        if (!data.email || !data.message || !data.name) {
            return toast.error("Please fill in all the fields");
        }

        setData({
            name: "",
            email: "",
            message: ""
        });
        toast.success("Query submitted successfully");
    }

    return (
        <div>
            { /* Heading */}
            <div className='text-center'>
                <h1 className='text-2xl font-bold'>Contact</h1>
                <div className='bg-indigo-600 h-1 w-24 mx-auto' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-3 py-5'>

                { /* Contact Details */}
                <div>
                    <h1 className='text-xl font-semibold'>Let's talk</h1>
                    <div className='flex items-center gap-2'>
                        <p>
                            <i className="ri-phone-fill"></i>
                        </p>
                        <p>+91 8795915044</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p>
                            <i className="ri-mail-line"></i>
                        </p>
                        <p>vikassharma46305@gmail.com</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p><i className="ri-map-pin-2-fill"></i></p>
                        <p>Uttar Pradesh, India</p>
                    </div>
                </div>

                { /*  Form Input */}
                <div className='flex flex-col gap-3'>
                    <input
                        onChange={(e) => HandleChange("name", e)}
                        value={data.name}
                        placeholder='full name'
                        className='border py-2 px-1 rounded'
                    />
                    <input
                        onChange={(e) => HandleChange("email", e)}
                        value={data.email}
                        placeholder='email id'
                        className='border py-2 px-1 rounded'
                    />
                    <textarea
                        onChange={(e) => HandleChange("message", e)}
                        value={data.message}
                        placeholder='message'
                        className='border py-2 px-1 rounded'
                    />
                    <button
                        onClick={HandleSubmitButton}
                        className='px-5 py-2 rounded bg-indigo-900 text-white'
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact