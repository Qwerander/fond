import styled from 'styled-components';

export const StyledMobileMenu = styled.div`

    .mobileMenu__inner {

        background-color: #3b8e45;
        .mobileMenu__burger {
            width: 26px;
            height: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
            span {
                display: block;
                width: 100%;
                height: 2px;
                background-color: #ffca3a;
                border-radius: 1px;
                transition: all 0.3s ease;
            }
            span + span {
                margin-top: 6px;
            }

            &:hover {
                & span:nth-child(1) {
                    width: 40%;
                }
                & span:nth-child(3) {
                    width: 40%;
                }
            }
        }

        .mobileMenu__burger.open {
            position: absolute;
             z-index: 100;
             transition: transform 0.5s ease-in-out;
            span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 7px);
                width: 26px;
            }
            span:nth-child(2) {
                opacity: 0;
            }
            span:nth-child(3) {
                transform: rotate(-45deg) translate(4px, -7px);
                width: 26px;
            }
            transform: translateY(-160px);
            @media (max-width: 490px) {
                transform: translateY(-220px);
                
            }
        }

        .mobileMenu__dropMenu {
            width: 100%;
            position: absolute;
            background-color: #3b8e45;
            left: 0;
            top: 0;
            /* padding: 10px 0; */
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            z-index: -1;
            transition: all 0.3s ease-in-out;
            transform: translateY(-150%);
            
            &.open {
                z-index: 10;
                transform: translateY(0);
                max-height: calc(100vh);
                overflow: auto;
            }
            .menu-wrapper {
                margin-top: 20px;
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 12px;


                @media (max-width: 400px) {
                    grid-template-columns: 1fr;
                    overflow-y: auto;
                }
            }

        }
    }
`;
