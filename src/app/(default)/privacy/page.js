'use client'
import Head from 'next/head'
import styles from './privacy.module.scss'
import { useState } from 'react'
import German from './policies/german'
import English from './policies/english'

export default function Privacy() {

    const [language, setLanguage] = useState('ENG');

    return (
        <>
            <Head>
                <title>Privacy</title>
                <meta name="description" content="Imprint" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="noindex, nofollow" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.privacy}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                    <span onClick={() => setLanguage('ENG')} disabled={language === 'ENG'}>
                        <img src="icons/united-kingdom.png" alt="Switch to English" style={{ width: '30px', height: '30px', filter: language === 'GER' ? 'brightness(50%)' : 'none' }} />
                    </span>
                    <span onClick={() => setLanguage('GER')} disabled={language === 'GER'}>
                        <img src="icons/germany.png" alt="Switch to German" style={{ width: '30px', height: '30px', filter: language === 'ENG' ? 'brightness(50%)' : 'none' }} />
                    </span>
                </div>


                {language === 'GER' ? <German /> : <English />}

            </div>

        </>
    )
}