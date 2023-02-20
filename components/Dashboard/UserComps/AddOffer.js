import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddOffer = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [offerStatus, setOfferStatus] = useState('');
  const onAddOffer = async (data) => {};
  return (
    <div className=" pt-[4.5rem] w-full  ">
      <div className="">
        <div className="card-body">
          <h2 className="card-title text-[#333]">Add Offer</h2>

          <div className="shadow-xl py-4 px-[8px]">
            <form onSubmit={handleSubmit(onAddOffer)}>
              <div className="w-full flex justify-between gap-x-[10px]">
                <div className="w-[100%]">
                  <input
                    type="text"
                    placeholder="Offer Title"
                    className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                    {...register('courseTitle', {
                      required: {
                        value: true,
                        message: 'Offer Title is required',
                      },
                    })}
                  />
                  <input
                    type="text"
                    placeholder="Author Name"
                    className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                    {...register('author', {
                      required: {
                        value: true,
                        message: 'Author Name is required',
                      },
                    })}
                  />
                  <input
                    type="text"
                    placeholder="Offer Tags"
                    className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                    {...register('tags', {
                      required: {
                        value: true,
                        message: 'Offer Tags is required',
                      },
                    })}
                  />
                </div>
                <div className="w-[100%]">
                  <textarea
                    className="textarea w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] "
                    placeholder="Offer Content"
                    {...register('courseContent', {
                      required: {
                        value: true,
                        message: 'Offer Content is required',
                      },
                    })}
                  />

                  <select
                    className="select select-bordered w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                    onChange={(e) => setOfferStatus(e.target.value)}
                    {...register('status', {
                      required: {
                        value: true,
                        message: 'Status is required',
                      },
                    })}
                  >
                    <option value="Free">Free</option>
                    <option value="Premium">Premium</option>
                  </select>
                  {offerStatus === 'Premium' && (
                    <>
                      <input
                        type="number"
                        placeholder="Price"
                        className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                        {...register('price')}
                      />
                      <input
                        type="number"
                        placeholder="Gems"
                        className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                        {...register('priceGem')}
                      />
                    </>
                  )}
                  <input
                    type="url"
                    placeholder="Offer Image URL"
                    className="input w-full max-w-md bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
                    {...register('image', {
                      required: {
                        value: true,
                        message: 'Offer Image URL is required',
                      },
                    })}
                  />
                </div>
              </div>
              <button
                className="mt-[25px] bg-[#1FC2FF] border-[#1AA8EB] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] lg:md:w-[30%] w-[100%] rounded-xl text-[#fff] font-bold lg:md:text-[15px] text-[12px] focus:border-b-[2px] flex justify-center mx-auto"
                type="submit"
              >
                Add Offer
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOffer;
