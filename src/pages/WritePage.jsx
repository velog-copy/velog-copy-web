import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ReactComponent as Leftarrow } from '../assets/leftarrow.svg';
import CodeToolbar from '../components/codeToolbar';

import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import styles from './WritePage.module.css';

function WritePage() {
  const [title, setTitle] = useState([]);
  const [content, setContent] = useState("");
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = useCallback((val, viewUpdate) => {
    setContent(val);
  }, []);

  return (
    <div className={styles.Writemain}>
      <div className={styles.WriteLayout}>
        <div className={styles.WriteLeft}>
          <div className={styles.CodeBox}>
            <div className={styles.CodeWrapper}>
              <div className={styles.CodeTop}>
                <div className={styles.Topbox}>
                  <textarea className={styles.TitleInput} placeholder='제목을 입력하세요' value={title} onChange={handleTitleChange}></textarea>
                  <div className={styles.Line}></div>
                  <div>
                    <div className={styles.TagBox}>
                      <div className={styles.Tag}>Placeholder</div>
                      <input className={styles.TagInput} placeholder='태그를 입력하세요'></input>
                    </div>
                  </div>
                </div>
              </div>
              <CodeToolbar></CodeToolbar>
              <CodeMirror className={styles.CodeMirror} placeholder="당신의 이야기를 적어보세요..." value={content} extensions={[markdown({ base: markdownLanguage })]} basicSetup={{lineNumbers: false, highlightActiveLineGutter: false, highlightActiveLine: false}} onChange={handleContentChange} />
            </div>
            <div className={styles.Toolbar}>
              <div className={styles.ToolBox}>
                <button className={styles.ExitButton}>
                  <Leftarrow></Leftarrow>
                  <span>나가기</span>
                </button>
                <div className={styles.SaveButtons}>
                  <button className={`${styles.TempSave} ${styles.Button} ${styles.SaveButton}`}>임시저장</button>
                  <button className={`${styles.Save} ${styles.Button} ${styles.SaveButton}`}>출간하기</button>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div className={styles.WriteRight}>
          <div className={styles.WritePreview}>
            <h1 className={styles.WriteTitle}>{title}</h1>
            <div className={styles.WriteContents}>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WritePage;