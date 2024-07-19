function Services(){
    
    return (
        <>

        
        <div class="p-3 mb-2 bg-success-subtle text-success-emphasis" >
          <div className="px-4 py-5 my-5 text-center">
              <h1 className="display-5 fw-bold text-body-emphasis">Contact Us</h1>
              <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Rolls-Royce switchboard: 01332 242424 (Open hours are 8am - 4pm Monday to Friday excluding bank holidays).

                Below are the contact details for all areas of our organisation.

            </p>
              </div>
              </div>
            </div>
          

            <div className="row align-items-center g-lg-5 py-5">
      <div className="col-lg-7 text-center text-lg-start">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">U can send Mail if Any queries</h1>
        <p className="col-lg-10 fs-4">Rolls-Royce headquarters - Address and contact number for our head office

                                Regional Offices - contact details for our regional offices around the world

                                Careers - Search and apply for jobs at Rolls-Royce

                                Shareholder enquiries - for all shareholders

                                Investor enquiries - for institutional investors

                                Media enquiries - relating to press announcements</p>
      </div>
      <div className="col-md-10 mx-auto col-lg-5">
        <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
          <hr className="my-4"/>
          <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
        </form>
      </div>
    </div>




            </>
            )
            }

export default Services;
          