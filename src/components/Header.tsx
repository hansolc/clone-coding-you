/** @jsxImportSource @emotion/react */
"use client";
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import Logo from "/public/youtubelogo.svg";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <header
      css={css`
        display: flex;
        justify-content: space-between;
        height: 56px;
        padding: 0 16px;
        align-items: center;
      `}
    >
      {children}
    </header>
  );
};

const Start = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      id="start"
      css={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        span {
          font-size: 24px;
          cursor: pointer;
        }
        div: {
          width: 129px;
          height: 100%;
          display: flex;
          align-items: center;
          cursor: pointer;
        }
      `}
    >
      {children}
    </div>
  );
};

const Center = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      css={css`
        flex: 0 1 732px;
        display: flex;
        align-items: center;
        height: 40px;

        > div:nth-child(1) {
          flex: 1;
          height: inherit;
          align-items: center;
          display: flex;
          > div:nth-child(1) {
            display: flex;
            flex: 1;
            border: 1px solid #ccc;
            border-radius: 40px 0 0 40px;
            padding: 0 4px 0 16px;
            height: 38px;
            align-items: center;
            margin-left: 32px;
            input {
              padding: 0;
              margin: 0;
              border-width: 0px;
              border-color: transparent;
              height: 24px;
              font-size: 16px;
              width: 100%;
              &:focus {
                outline: none;
              }
            }
          }

          button {
            width: 64px;
            height: 100%;
            border: 1px solid #d3d3d3;
            background-color: #f8f8f8;
            border-radius: 0 40px 40px 0;
            cursor: pointer;
            > span {
              font-weight: 200;
              font-size: 24px;
            }
          }

          > div:nth-child(3) {
            width: 40px;
            height: 40px;
            border-radius: 100px;
            margin-left: 12px;
            background-color: rgba(0, 0, 0, 0.05);
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      `}
    >
      {children}
    </div>
  );
};

const End = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      css={css`
        justify-content: flex-end;
        align-items: center;
        > button {
          width: 98px;
          height: 36px;
          border-radius: 18px;
        }
      `}
    >
      {children}
    </div>
  );
};

function Header() {
  return (
    <Container>
      <Start>
        <span className="material-symbols-outlined">menu</span>
        <div>
          <Logo viewbox="0 0 90 20" width="120" height="30" />
        </div>
      </Start>
      <Center>
        <div>
          <div>
            <input type="text"></input>
          </div>
          <button>
            <span className="material-symbols-outlined">search</span>
          </button>
          <div>
            <span className="material-symbols-outlined">mic</span>
          </div>
        </div>
      </Center>
      <End>
        <button>
          <span className="material-symbols-outlined">account_circle</span>
          로그인
        </button>
      </End>
    </Container>
  );
}

export default Header;
