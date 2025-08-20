import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import { ReactComponent as Leftarrow } from '../assets/leftarrow.svg';
import { ReactComponent as Bold } from '../assets/bold.svg';
import { ReactComponent as Italic } from '../assets/italic.svg';
import { ReactComponent as Strike } from '../assets/strike.svg';
import { ReactComponent as Blockquote } from '../assets/blockquote.svg';
import { ReactComponent as Link } from '../assets/link.svg';
import { ReactComponent as Image } from '../assets/image.svg';
import { ReactComponent as Codeblock } from '../assets/codeblock.svg';
import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
//import styles from './WritePage.module.css';
import './WritePage.css'

function WritePage() {
  const [posts, setPosts] = useState([]);

  return (
    <div className='Writemain'>
      <div className='WriteLayout'>
        <div className='WriteLeft'>
          <div className='CodeBox'>
            <div className='CodeWrapper'>
              <div className='CodeTop'>
                <div className='Topbox'>
                  <textarea className='TitleInput' placeholder='제목을 입력하세요'></textarea>
                  <div className='Line'></div>
                  <div>
                    <div className='TagBox'>
                      <div className='Tag'>Placeholder</div>
                      <input className="TagInput" placeholder='태그를 입력하세요'></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className='CodeToolbar'>
                <button className='Tool' value='1'>
                  <div className='Toolheader'>H<span>1</span></div>
                </button>
                <button className='Tool' value='2'>
                  <div className='Toolheader'>H<span>2</span></div>
                </button>
                <button className='Tool' value='3'>
                  <div className='Toolheader'>H<span>3</span></div>
                </button>
                <button className='Tool' value='4'>
                  <div className='Toolheader'>H<span>4</span></div>
                </button>
                <div className='separator'></div>
                <button className='Tool'>
                  <Bold></Bold>
                </button>
                <button className='Tool'>
                  <Italic></Italic>
                </button>
                <button className='Tool'>
                  <Strike></Strike>
                </button>
                <div className='separator'></div>
                <button className='Tool'>
                  <Blockquote></Blockquote>
                </button>
                <button className='Tool'>
                  <Link></Link>
                </button>
                <button className='Tool'>
                  <Image></Image>
                </button>
                <button className='Tool'>
                  <Codeblock></Codeblock>
                </button>
              </div>
              <CodeMirror className="CodeMirror" placeholder="당신의 이야기를 적어보세요..." extensions={[markdown({ base: markdownLanguage })]} basicSetup={{lineNumbers: false, highlightActiveLineGutter: false, highlightActiveLine: false}} />
            </div>
            <div className='Toolbar'>
              <div className='ToolBox'>
                <button className='ExitButton'>
                  <Leftarrow></Leftarrow>
                  <span>나가기</span>
                </button>
                <div className='SaveButtons'>
                  <button className='TempSave Button SaveButton'>임시저장</button>
                  <button className='Save Button SaveButton'>출간하기</button>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div className='WriteRight'>
          <div className='WritePreview'>
            <h1 className='WriteTitle'></h1>
            <div className='WriteContents'>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WritePage;