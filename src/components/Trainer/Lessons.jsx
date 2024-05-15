import React, { useState } from 'react';
import { ImNext, ImPrevious } from 'react-icons/im';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const Lessons = () => {
  const initialLessons = [];

  const [lessons, setLessons] = useState(initialLessons);
  const [currentLesson, setCurrentLessons] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [newLesson, setNewLesson] = useState({ thumbnail: '', video: '', title: '', description: '' });
  const [playingVideo, setPlayingVideo] = useState(null);

  const nextLesson = () => {
    setCurrentLessons((prevIndex) =>
      prevIndex + 3 < lessons.length ? prevIndex + 3 : 0
    );
  };

  const prevLesson = () => {
    setCurrentLessons((prevIndex) =>
      prevIndex - 3 >= 0 ? prevIndex - 3 : lessons.length - 3
    );
  };

  const handleAddLesson = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newLesson.thumbnail && newLesson.video && newLesson.title && newLesson.description) {
      setLessons([...lessons, newLesson]);
      setShowForm(false);
      setNewLesson({ thumbnail: '', video: '', title: '', description: '' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLesson({ ...newLesson, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const { name } = e.target;
    if (file) {
      setNewLesson({ ...newLesson, [name]: URL.createObjectURL(file) });
    }
  };

  const handleThumbnailClick = (video) => {
    setPlayingVideo(video);
  };

  return (
    <div className='flex flex-col gap-10 text-orange-400'>
      <div className=''>
        <div className='flex flex-row gap-5 justify-between'>
          <span className='flex flex-row gap-5'>
            <span className='bg-orange-400 w-6'></span>
            <h1 className='text-4xl font-bold'>Your Lessons</h1>
          </span>
          <span className='flex flex-row gap-5 text-4xl text-orange-400 cursor-pointer px-20'>
            <ImPrevious onClick={prevLesson} />
            <ImNext onClick={nextLesson} />
          </span>
        </div>
        <div className='py-10 flex flex-row items-center justify-center gap-10'>
          {lessons.length > 0 ? (
            lessons.slice(currentLesson, currentLesson + 3).map((item, index) => (
              <div key={index} className='w-96 shadow-sm shadow-orange-400'>
                <img
                  src={item.thumbnail}
                  alt="Lesson Thumbnail"
                  className='border-4 border-[#27272A] w-full h-44 cursor-pointer'
                  onClick={() => handleThumbnailClick(item.video)}
                />
                <div className='bg-[#27272A] w-full p-5'>
                  <h1 className='text-orange-400 font-bold text-2xl'>{item.title}</h1>
                  <hr className='mt-2 p-2 opacity-60' />
                  <p className='text-orange-400 text-sm'>{item.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p className='text-2xl'>No lessons uploaded</p>
          )}
        </div>
      </div>
      <hr className='opacity-30' />
      <div className='flex flex-col gap-10'>
        <div className='flex flex-row gap-5 justify-between'>
          <span className='flex flex-row gap-5'>
            <span className='bg-orange-400 w-6'></span>
            <h1 className='text-4xl font-bold'>Add Lessons</h1>
          </span>
          <span className='flex flex-row items-center gap-2 text-xl border border-orange-400 rounded-md px-3 mr-20 cursor-pointer' onClick={handleAddLesson}>
            <AiOutlinePlusCircle />
            <button> Add </button>
          </span>
        </div>
        {showForm && (
          <form onSubmit={handleFormSubmit} className='flex flex-col gap-5 p-5 bg-[#27272A] border border-orange-400'>
            <div className='flex flex-col gap-2'>
              <label htmlFor='thumbnail' className='text-xl'>Upload Video Thumbnail</label>
              <input type='file' id='thumbnail' name='thumbnail' accept='image/*' onChange={handleFileChange} className='p-2' />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='video' className='text-xl'>Upload Video</label>
              <input type='file' id='video' name='video' accept='video/*' onChange={handleFileChange} className='p-2' />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='title' className='text-xl'>Title</label>
              <input type='text' id='title' name='title' value={newLesson.title} onChange={handleInputChange} className='p-2' />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='description' className='text-xl'>Description</label>
              <textarea id='description' name='description' value={newLesson.description} onChange={handleInputChange} className='p-2' />
            </div>
            <button type='submit' className='mt-5 p-2 bg-orange-400 text-[#27272A] font-bold'>Upload Lesson</button>
          </form>
        )}
      </div>
      {playingVideo && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white p-5 rounded'>
            <video controls className='w-full'>
              <source src={playingVideo} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
            <button onClick={() => setPlayingVideo(null)} className='mt-5 p-2 bg-orange-400 text-[#27272A] font-bold'>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lessons;
