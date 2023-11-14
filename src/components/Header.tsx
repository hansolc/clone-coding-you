/** @jsxImportSource @emotion/react */
"use client";
import { jsx, css } from "@emotion/react";
import Logo from "/public/youtubelogo.svg";

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  align-items: center;
  #start {
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
  }
  #center {
    flex: 0 1 732px;
    display: flex;
    align-items: center;
    height: 40px;

    div:nth-child(1) {
      flex: 1;
      height: 100%;
      align-items: center;
      display: flex;
      div {
        flex: 1;
        border: 1px solid #ccc;
        border-radius: 40px 0 0 40px;
        padding: 0 4px 0 16px;
        input {
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
      }
    }
  }
  #end {
    justify-content: flex-end;
    align-items: center;
  }
`;

function Header() {
  return (
    <header css={headerStyle}>
      <div id="start">
        <span className="material-symbols-outlined">menu</span>
        <div>
          <Logo viewbox="0 0 90 20" width="120" height="30" />
        </div>
      </div>
      <div id="center">
        <div>
          <div>
            <input type="text"></input>
          </div>
          <button></button>
        </div>
        <div>icon</div>
      </div>
      <div id="end">login button</div>
    </header>
  );
}

export default Header;
