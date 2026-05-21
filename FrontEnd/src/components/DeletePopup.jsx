
const DeletePopup = ({popupDelete,setPopupDelete,handleDelete}) => {
    return (
        <>
            <section className='bg-black/50 absolute top-0 left-0 w-full h-screen flex justify-center items-center '>
                <div className='flex flex-col py-8 px-12 gap-10 justify-center items-center border rounded-2xl bg-white'>
                    <p className='text-lg text-gray-500'>Do you want to delete this recipe</p>
                    <div className='space-x-4'>
                        <button className='px-6 py-1 rounded-md border border-gray-300 cursor-pointer hover:bg-red-500 hover:text-white' onClick={handleDelete}>Yes</button>
                        <button className='px-6 py-1 rounded-md border border-gray-300 cursor-pointer hover:bg-orange-500 hover:text-white' onClick={ ()=>{setPopupDelete(false)}}>No</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DeletePopup
