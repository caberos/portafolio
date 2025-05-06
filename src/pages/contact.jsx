

export default function Contacts(){
    return(
        <div className="d-flex justify-content-center align-items-center vh-100">
        <section className="resume-section text-center" id="contact">
          <div className="resume-section-content">
            <h1 className="mb-0">
              Cabero Barrios  
              <span className="text-primary"> Daniel Francisco</span>
            </h1>
            <div className="subheading mb-4">
              Calle Satinadores de Selva · Cochabamba, BO · (+591) 60792226 ·
              <a href="mailto:cabernaldo010788@email.com" className="ms-1">cabernaldo010788@email.com</a>
            </div>
            <p className="lead mb-4">
              Tech engineer with over 6 years of experience in API development and support, specializing in automation tools and backend system optimization. Proven track record in implementing solutions that boost development team efficiency, with a strong focus on continuous integration and performance enhancement of key systems.
            </p>
            <div className="social-icons">
              {/* Aquí puedes poner íconos sociales si quieres */}
            </div>
          </div>
        </section>
      </div>
    )
}