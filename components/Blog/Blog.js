import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Blog = () => {
  return (
    <>
      <div class="grid grid-cols-2 gap-4 m-5">
        {/* card 1 */}
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="card-body">
            <Image className="rounded" src="/arch.jpeg" width="200" height="200" alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <small>Author: John Smith</small>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam pariatur amet facere
              odio cumque totam aspernatur blanditiis sint! Explicabo, laborum?
            </p>
            <div className="card-actions justify-end">
              <Link href="/" className="btn">
                Details
              </Link>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <Image src="/arch.jpeg" width="200" height="200" alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
