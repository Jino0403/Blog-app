import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <header>
        <div>
          <Link to="/posts/new">글쓰기</Link>
          <Link to="/posts">게시글</Link>
          <Link to="/profile">프로필</Link>
        </div>
      </header>
      <div className="post__navigation">
        <div className="post__navigation-active">전체</div>
        <div>나의 글</div>
      </div>
      <div className="post__list">
        {[...Array(10)].map((e, index) => (
          <div key={index} className="post__box">
            <Link to={`/posts/${index}`}>
              <div className="post__profile-box">
                <div className="post__profile" />
                <div className="post__author-name">김황식</div>
                <div className="post__date">2024.02.02 금요일</div>
              </div>
              <div className="post__title">게시글 {index}</div>
              <div className="post__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                gravida iaculis mauris. Morbi vitae sodales eros. Vestibulum
                venenatis malesuada felis at pretium. Nulla et iaculis urna.
                Nunc ac est sed enim varius tempor. Duis nec neque sed est
                lacinia gravida. Phasellus consectetur magna sit amet justo
                gravida sodales. Donec porttitor tempor magna ac posuere.
              </div>
              <div className="post__utils-box">
                <div className="post__delete">삭제 </div>
                <div className="post__edit">수정 </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <footer>
        <Link to="/posts/new">글쓰기</Link>
        <Link to="/posts">게시글</Link>
        <Link to="/profile">프로필</Link>
      </footer>
    </div>
  );
}
