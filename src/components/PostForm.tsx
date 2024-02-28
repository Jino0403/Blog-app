import { useContext, useEffect, useState } from 'react';
import { collection, addDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from 'firebaseApp';
import AuthContext from './context/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { PostProps } from './PostLIst';

export default function PostForm() {
  const params = useParams();
  const [post, setPost] = useState<PostProps | null>(null);
  const [title, setTitle] = useState<string>('');
  const [summary, setSummary] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(params);

  const getPost = async (id: string) => {
    if (id) {
      const docRef = doc(db, 'posts', id);
      const docSnap = await getDoc(docRef);

      setPost({ id: docSnap?.id, ...(docSnap.data() as PostProps) });
    }
  };
  console.log(post);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { name, value },
    } = e;

    if (name === 'title') {
      setTitle(value);
    }

    if (name === 'summary') {
      setSummary(value);
    }

    if (name === 'content') {
      setContent(value);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (post && post?.id) {
        //만약 post 데이터가 있다면 firestore로 데이터 수정
        const postRef = doc(db, 'posts', post?.id);
        await updateDoc(postRef, {
          title: title,
          summary: summary,
          content: content,
          updatedAt: new Date()?.toLocaleDateString(),
        });

        toast.success('게시글 수정이 완료되었습니다.');
        navigate(`/post/${post.id}`);
      } else {
        //firestore로 데이터 생성
        await addDoc(collection(db, 'posts'), {
          title: title,
          summary: summary,
          content: content,
          createAt: new Date().toLocaleDateString(),
          email: user?.email,
          uid: user?.uid,
        });

        navigate('/');
        toast?.success('게시글 작성이 완료되었습니다.');
      }
    } catch (error: any) {
      console.log(error);
      toast?.error(error?.code);
    }
  };

  useEffect(() => {
    if (params?.id) {
      getPost(params?.id);
    }
  }, [params?.id]);

  useEffect(() => {
    if (post) {
      setTitle(post?.title);
      setSummary(post?.summary);
      setContent(post?.content);
    }
  }, [post]);

  return (
    <form onSubmit={onSubmit} className="form">
      <div className="form__block">
        <label htmlFor="title">제목</label>
        <input
          type="text"
          name="title"
          id="title"
          required
          value={title}
          onChange={onChange}
        />
      </div>
      <div className="form__block">
        <label htmlFor="summary">요약</label>
        <input
          type="text"
          name="summary"
          id="summary"
          required
          value={summary}
          onChange={onChange}
        />
      </div>
      <div className="form__block">
        <label htmlFor="content">내용</label>
        <textarea
          name="content"
          id="content"
          required
          value={content}
          onChange={onChange}
        />
      </div>
      <div className="form__block">
        <button type="submit" className="form__btn--submit">
          {post ? '수정' : '제출'}
        </button>
      </div>
    </form>
  );
}
