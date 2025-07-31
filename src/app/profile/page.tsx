import React from "react";

const profile = () => {
  return (
    <div className="min-h-screen flex">
      <main className="flex-1 bg-gray-100 p-10">
        <h1 className="text-4xl font-bold p-5">Firstname Surname</h1>
        <div className="flex max-w-full justify-center mb-20">
          <div className="w-300 h-50 bg-white p-5 rounded ">
            <h2 className="text-xl font-bold">Contact Details</h2>
            <p className="text-sm">How you will be contacted on the day of job</p>
            <div className="p-3">
              <p>Phone: XXXXXXXXX</p>
              <p>Email: XXXXX@XXX.com</p>
            </div>
          </div>
        </div>

        <div className="flex max-w-full justify-center">
          <div className="w-300 h-75 bg-white p-5 rounded">
            <h2 className="text-xl font-bold">Availability</h2>
            <p className="text-sm">You will not be notified of jobs on days that are not selected</p>
            <div className="flex flex-col p-3">
              <form>
                <label className="flex items-center space-x-2 font-bold">
                  <span>Monday</span>
                  <input type="checkbox"/>
                </label>
                <label className="flex items-center space-x-2 font-bold">
                  <span>Tuesday</span>
                  <input type="checkbox"/>
                </label>
                <label className="flex items-center space-x-2 font-bold">
                  <span>Wednesday</span>
                  <input type="checkbox"/>
                </label>

                <label className="flex items-center space-x-2 font-bold">
                  <span>Thursday</span>
                  <input type="checkbox"/>
                </label>

                <label className="flex items-center space-x-2 font-bold">
                  <span>Friday</span>
                  <input type="checkbox"/>
                </label>

                <label className="flex items-center space-x-2 font-bold">
                  <span>Saturday</span>
                  <input type="checkbox"/>
                </label>

                <label className="flex items-center space-x-2 font-bold">
                  <span>Sunday</span>
                  <input type="checkbox"/>
                </label>
              </form>
            </div>
          </div>
        </div>

      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p> </p>
      </footer>
    </div>
  );
};

export default profile;