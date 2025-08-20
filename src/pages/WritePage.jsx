import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import { ReactComponent as Leftarrow } from '../assets/leftarrow.svg';
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