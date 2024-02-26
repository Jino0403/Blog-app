export default function PostDetail() {
  return (
    <>
      <div className="post__detail">
        <div className="post__box">
          <div className="post__title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="post__profile-box">
            <div className="post__profile" />
            <div className="post__author-name">김황식</div>
            <div className="post__date">2024.02.02 금요일</div>
          </div>
          <div className="post__utils-box">
            <div className="post__delete">삭제 </div>
            <div className="post__edit">수정 </div>
          </div>
          <div className="post__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida
            iaculis mauris. Morbi vitae sodales eros. Vestibulum venenatis
            malesuada felis at pretium. Nulla et iaculis urna. Nunc ac est sed
            enim varius tempor. Duis nec neque sed est lacinia gravida.
            Phasellus consectetur magna sit amet justo gravida sodales. Donec
            porttitor tempor magna ac posuere.
          </div>
        </div>
      </div>
    </>
  );
}
