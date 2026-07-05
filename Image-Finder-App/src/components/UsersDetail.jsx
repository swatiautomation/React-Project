import { useImageContext } from "../context/ImageContext";

import { useParams ,Link} from "react-router-dom";

const UsersDetail = () => {
  const { id } = useParams();
  const { imageData } = useImageContext();

  const item = imageData.find((img) => img.user.id === id);
  if (!item) {
    return <div className="p-6">User not found</div>;
  }

  const { user } = item;

  return (
    <>
      <Link to="/" className=" m-7 btn btn-sm mb-4 hover:bg-red-300">
        ← Back
      </Link>
      <div className="p-6 max-w-3xl mx-auto border-5 hover:bg-red-300 ">
        <div className="flex items-center gap-4">
          <img
            className="rounded-xl my-4 "
            src={user.profile_image.large}
            alt={user.name}
          />
          <div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-500">{user.username}</p>
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <p>
            <strong>Bio:</strong>
            {user.bio ?? "No bio available"}
          </p>
          <p>
            <strong>Location:</strong>
            {user.location ?? "Unknown"}
          </p>
          <p>
            <strong>Total Photos:</strong>
            {user.total_photos}
          </p>
          <p>
            <strong>Total Likes:</strong>
            {user.total_likes}
          </p>
          <a
            href={user.links.html}
            target="_blank"
            rel="noreferrer"
            className="btn badge-outline mt-4 hover:bg-red-300"
          >
            View on Unsplash
          </a>
        </div>
      </div>
    </>
  );
};

export default UsersDetail;
