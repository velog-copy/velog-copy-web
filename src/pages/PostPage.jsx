import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import ReactMarkdown from "react-markdown";
import { ReactComponent as Like } from '../assets/like.svg';
import { ReactComponent as Share } from '../assets/share.svg';
import styles from './PostPage.module.css';

function PostPage() {
  return (
    <div className='Content'>
      <div className='HomeLayout'>
        <Header />
        <Pagehead />
        <PageContents />
      </div>
    </div>
  );
}

function Pagehead() {
  return (
    <div className={styles.Pagehead}>
      <div className={styles.headwrapper}>
        <h1>title</h1>
        <div className={styles.HeadInfo}>
          <div className={styles.information}>
            <span className={styles.username}><a href="" className='HeadUsername'>ASDF</a></span>
            <span className={styles.separator}>·</span>
            <span>2025년 8월 10일</span>
          </div>
          <div className={styles.Buttons}>
            <div className={styles.Follow}>
              <button className={`${styles.FollowButton} ${styles.button}`}>
                <span>팔로우</span>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.Tags}>
          <a className={styles.Tag} href=''>Test</a>
        </div>
        <div className={styles.Sidebar}>
          <div className={styles.Side}>
            <div className={styles.SideIn}>
              <div className={styles.SideBtn}>
                <Like className={styles.like}></Like>
              </div>
              <div className={styles.Likenum}>0</div>
              <div className={styles.SideBtn}>
                <Share className={styles.share}></Share>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PageContents() {
  return (
    <div className={styles.PageContents}>
      <div className={styles.PageContent}>
        <div>
          <ReactMarkdown>Place</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default PostPage;