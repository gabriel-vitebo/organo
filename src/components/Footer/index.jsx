import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="bgImage">
        <div className="icon">
          <button>
            <img src="/assets/fb.png" alt="Icone do Facebook" />
          </button>
          <button>
            <img src="/assets/tw.png" alt="Icone do Twitter " />
          </button>
          <button>
            <img src="/assets/ig.png" alt="Icone do  Instagram " />
          </button>
        </div>
        <div className="logo">
          <img src="/assets/logo.png" alt="Logo do organo" />
        </div>
        <div className="byAlura">
          <p>Desenvolvido por Alura</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
