import React, {useRef, useState} from 'react';
import styled from "styled-components";
import {IconType} from "react-icons";

interface RippleButton {
    children?: any;
    onClick?: () => void;
}

const RippleEffect: React.FC<RippleButton> = ({children, onClick}) => {

    const [state, setState] = useState('');
    const [rippleStyle, setRippleStyle] = useState({});
    let timerId: any;
    const ripple = useRef<HTMLElement>(null);
    const button = useRef<HTMLButtonElement>(null);

    const onMouseDown = (e: any) => {
        setState('');
        clearTimeout(timerId);
        const size = button.current!.offsetWidth;
        const pos = button.current!.getBoundingClientRect();
        const x = e.pageX - pos.left - size;
        const y = e.pageY - pos.top - size;

        const newRippleStyle = {
            top: `${y}px`,
            left: `${x}px`,
            width: `${size * 2}px`,
            height: `${size * 2}px  `,
        };

        setRippleStyle(newRippleStyle);

        setState('ripple-start ripple-active');
        timerId = setTimeout(() => {
            setState('')
        }, 500);
    };

    return (
        <ButtonWrapper>
            <button
                ref={button}
                onMouseDown={onMouseDown}
                onClick={onClick}
                className={`ripple-button`}
            >
                <span
                    ref={ripple}
                    style={rippleStyle}
                    className={`ripple ${state}`}> </span>
                {children}
            </button>
        </ButtonWrapper>
    );
};

export default RippleEffect;

const ButtonWrapper = styled.div`
  .ripple-button{
    padding: 12px;
    margin: 0 0 0 0.5rem;
    display: flex;
    align-items: center;
    background-color: transparent;
    font-size: 1rem;
    position:relative;
    overflow: hidden;
    border-radius: 0.5rem;
    transition: 0.3s ease-in-out;
    font-weight: 600;
    color: ${({theme}) => theme.primary};
    :hover{
      background-color: rgba(30,144,255,0.7);
      color: rgba(255,255,255,0.7);
    }
  }
  .ripple{
    border-radius: 50%;
    background-color: ${({theme}) => theme.buttonClick};
    pointer-events: none;
    position:absolute;
    transform: scale(0);
    z-index: 1;
  }
  .ripple-active{
    transform: scale(2);
    transition: transform 0.7s ease-in-out, opacity 0.7s ease-in-out;
  }
`;