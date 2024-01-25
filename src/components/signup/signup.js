import styles from './signup.module.scss'

export default function Signup() {

  return (

    <div id="mc_embed_shell">

      <div id="mc_embed_signup">

        <form action="https://quantviz.us14.list-manage.com/subscribe/post?u=e197cd3bfb5c5e0d7568df688&amp;id=078b92d61c&amp;f_id=00a285e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_self" noValidate>

          <div id="mc_embed_signup_scroll">

            <div className="mc-field-group">
              {/*<label htmlFor="mce-EMAIL">Email Address </label>*/}
              <input type="email" name="EMAIL" className={styles.emailInput} id="mce-EMAIL" placeholder="E-Mail" required defaultValue="" />

            </div>

            <div id="mce-responses" className="clear foot">

              <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>

              <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>

            </div>

            <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>

              <input type="text" name="b_e197cd3bfb5c5e0d7568df688_078b92d61c" tabIndex="-1" value="" />

            </div>

            <div className="optionalParent">

              <div className="clear foot">

                <input type="submit" name="subscribe" id="mc-embedded-subscribe" className={styles.subButton} value="Subscribe" />
                {/*<p style={{margin: '0px auto'}}>
                    {/*<a href="http://eepurl.com/hTrXSX" title="Mailchimp - email marketing made easy and fun">
                      <span style={{display: 'inline-block', backgroundColor: 'transparent', borderRadius: '4px'}}>
                        <img className="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style={{width: '220px', height: '40px', display: 'flex', padding: '2px 0px', justifyContent: 'center', alignItems: 'center'}} />
                      </span>
                    </a>
                  </p>*/}
              </div>

            </div>

          </div>

        </form>

      </div>

    </div>






  )

}