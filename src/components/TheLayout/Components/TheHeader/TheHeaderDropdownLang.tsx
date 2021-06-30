import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import en from "../../../../assets/lang/en.png";
import ru from "../../../../assets/lang/ru.png"

import "../../../../utils/i18next";
import {useTranslation} from "react-i18next";

const TheHeaderDropdownLang = () => {

    const {t, i18n} = useTranslation();

    useEffect(() => {
        i18n.changeLanguage("en");
    }, []);
    const [langIcon, setLangIcon] = useState(en);

    function handleChangeLanguage(lang: string) {
        i18n.changeLanguage(lang);
        // console.log(lang);
        if (lang === "ru") {
            setLangIcon(ru);
            // setLangName("Russian")
            // console.log(langIcon)
        } else {
            setLangIcon(en);
            // setLangName("English")
        }
        toggleLang();
    }

    const [isOpen, setIsOpen] = useState(false);
    const toggleLang = () => {
        setIsOpen(!isOpen);
    };

    return (
        <LangWrapper>
            <div className="dropdown-lang">
                <div className="custom-dropdown-toggle" onClick={toggleLang}>
                    <img src={langIcon} alt="english"/>
                </div>
                {isOpen && (
                    <div>
                        <div onClick={toggleLang} className="dropdown-wrapper"></div>
                        <div className="dropdown-list">
                            <div onClick={() => handleChangeLanguage("en")} className="dropdown-item">
                                <img src={en} alt="english"/>
                                <div>English</div>
                            </div>
                            <div onClick={() => handleChangeLanguage("ru")} className="dropdown-item">
                                <img src={ru} alt="russian"/>
                                <div>Russian</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </LangWrapper>
    );
};

export default TheHeaderDropdownLang;

const LangWrapper = styled.div`
  margin-right: 0.5rem;
  .dropdown-lang{
    position:relative;
    .custom-dropdown-toggle{
      cursor:pointer;
      background: transparent;
      color: ${({theme}) => theme.primary};
      font-size: 1rem;
      padding: 1rem;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 8px;
      display:flex;
      align-items: center;
      justify-content:center;
      img{
          width: 1.2rem;
          height: 1.2rem;
          border-radius: 4px;
        }
      &:hover{
        background: ${({theme}) => theme.sidebarItemHover};
      }
    }
    .dropdown-wrapper{
      width: 100vw;
      height: 99vh;
      position:absolute;
      z-index: 12;
      right: -4rem;
      top: 0;
    }
    .dropdown-list{
      position:absolute;
      z-index: 12 ;
      right: 0;
      top: 3rem;
      cursor:pointer;
      backdrop-filter: blur(35px);
      background: ${({theme}) => theme.white};
      box-shadow: 0px 2px 8px rgba(0,0,0,0.1);
      padding: 0.5rem 0;
      border-radius: 8px;
      .dropdown-item{
        padding: 0.3rem 2rem;
        display:flex;
        //width: 12rem;
        align-items: center;
        img{
          width: 1.4rem;
          height: 1rem;
        }
        div{
          margin-left: 0.5rem;
        }
        transition: var(--main-transition);
          &:hover{
          //background: ${({theme}) => theme.sidebarItemHover};
          background: transparent!important;
          color: dodgerblue;
        }  
      }
    } 
  }
`;