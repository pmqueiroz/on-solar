import Image from 'next/image'

export default function Login() {
   return (
      <div style={{ minHeight: '100vh' }} className="d-flex flex__center fd-column h100 bg-black-050">
         <Image width="96" height="180" alt="logo" src="/logo_colorful.svg" className="w96 mb24" />
         <form className="s-card bg-white bs-sm bar-lg wmn4 p24">
            <div className="d-flex fd-column box-border g24">
               <input className="flex--item s-input s-input__lg" id="email" type="text" placeholder="email"/>
               <div>
                  <input className="flex--item s-input s-input__lg mb12" id="password" placeholder="senha" type="password"/>
                  <fieldset>
                     <div className="d-flex gs8">
                        <div className="flex--item">
                              <input className="s-checkbox" type="checkbox" name="keep-connected" id="keep-connected"/>
                        </div>
                        <label className="flex--item s-label fw-normal" htmlFor="keep-connected">Manter conectado</label>
                     </div>
                  </fieldset>
               </div>
               <button className="s-btn s-btn__primary s-btn__md" type="submit">entrar</button>
            </div>
         </form>
      </div>
   )
}
