import { gql, useMutation, useQuery } from "@apollo/client";
import { getTimeAgoText } from "../Hooks/time";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faPaperPlane,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import ToggleLike from "../components/ToggleLike";

const SEE_FEED_QUERY = gql`
  query SeeFeed {
    seeFeed {
      user {
        userName
        avatar
        isMe
      }
      id
      likes
      caption
      file
      createdAt
      isMine
      isLiked
    }
  }
`;

const TOGGLE_PHOTO = gql`
  mutation togglePhoto($togglePhotoId: Int!) {
    togglePhoto(id: $togglePhotoId) {
      ok
      error
    }
  }
`;

interface ISeeFeed {
  user: {
    userName: string;
    avatar: string;
    isMe: boolean;
  };
  id: number;
  likes: number;
  caption: string;
  file: string;
  createdAt: string;
  isMine: boolean;
  isLiked: boolean;
}

function Home() {
  const { data } = useQuery(SEE_FEED_QUERY);
  const feedArr: ISeeFeed[] = data?.seeFeed || [];
  const currentTime = new Date();

  const [toggleLikeMutation, { loading }] = useMutation(TOGGLE_PHOTO);
  const handleToggleLike = (
    photoId: number,
    isLiked: boolean,
    toggleLikes: number
  ) => {
    toggleLikeMutation({
      variables: {
        togglePhotoId: photoId,
      },
      update(cache, { data }) {
        if (data?.togglePhoto.ok === false) {
          return;
        }
        cache.modify({
          id: `Photo:${photoId}`,
          fields: {
            isLiked: (isLiked) => !isLiked,
            likes: (toggleLikes) =>
              isLiked === true ? toggleLikes - 1 : toggleLikes + 1,
          },
        });
      },
    });
  };

  return (
    <div className=" mt-24">
      {feedArr.map((p) => {
        const timeAgoText = getTimeAgoText(p.createdAt, currentTime);

        return (
          <div key={p.id}>
            {/* Feed Header */}
            <div className=" flex ml-3 mb-3 items-center">
              {/* userAvatar */}
              <img
                src={p.user.avatar}
                className=" w-7 h-7 rounded-full  border border-boxBorder"
              />
              {/* dot */}
              <div className=" w-1 h-1 rounded-full bg-black ml-3"></div>
              {/* username */}
              <span className="ml-2">{p.user.userName}</span>
              {/* dot */}
              <div className=" w-1 h-1 rounded-full bg-black ml-3"></div>
              {/* update */}
              <span className="ml-2 text-gray-400">{timeAgoText}</span>
            </div>
            {/* Feed Main */}
            <div>
              {/* IMG */}
              <img
                src={p.file}
                alt="null"
                className=" w-feedImg h-feedImg rounded-lg m-2"
              />
              {/* IMG caption */}
              <div className=" px-6 mt-3">
                {/* Btns */}
                <div className=" flex justify-between mb-3">
                  {/* col-L */}
                  <div className=" w-28 flex justify-between items-center">
                    <div
                      onClick={() => handleToggleLike(p.id, p.isLiked, p.likes)}
                    >
                      <ToggleLike isLiked={p.isLiked} />
                    </div>
                    <button>
                      <FontAwesomeIcon
                        icon={faComment}
                        size="2x"
                        className=" w-6"
                      />
                    </button>
                    <button>
                      <FontAwesomeIcon
                        icon={faPaperPlane}
                        size="2x"
                        className=" w-6"
                      />
                    </button>
                  </div>
                  {/* col-R */}
                  <div className=" flex items-center">
                    <button>
                      <FontAwesomeIcon
                        icon={faBookmark}
                        size="2x"
                        className=" w-6 h-6"
                      />
                    </button>
                  </div>
                </div>
                {/* like cnt */}
                <div className="mb-5 font-semibold text-sm">
                  좋아요 {p.likes}
                </div>
                {/* Caption */}
                <div>
                  <div className=" relative mb-3 ml-1">
                    <span className=" absolute -top-4 -left-1 text-sm font-semibold">
                      {p.user.userName}
                    </span>
                    {p.caption}
                  </div>
                </div>
              </div>
            </div>
            {/* Feed Comments */}
            <div></div>
            {/* seperator */}
            <div className=" w-full h-one bg-boxBorder mb-3 mt-14"></div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
