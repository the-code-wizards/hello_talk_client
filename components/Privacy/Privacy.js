import React, { useEffect, useState } from 'react';

const Privacy = () => {
  const [terms, setTerms] = useState([]);
  // const happen = terms.map(term => term.content)
  useEffect(() => {
    fetch(`https://hello-talk-webserver.vercel.app/privacy`)
      .then((res) => res.json())
      .then((data) => {
        setTerms(data);
      });
  }, []);

  return (
    <div className="py-24 mx-36">
      <div>
        <h2 className="text-3xl capitalize text-center font-featherBold py-3">
          Read our privacy policy
        </h2>
        <hr />
      </div>
      {terms.map((term) => (
        <div key={term._id} className="mt-10">
          <div dangerouslySetInnerHTML={{ __html: term.content }} />
        </div>
      ))}
    </div>
  );
};

export default Privacy;