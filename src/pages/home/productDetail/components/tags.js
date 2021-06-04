/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */

const Tags = ({ tags }) => {

    var tagList="..."
    if (tags !== undefined) {
        tagList = tags.map(tag =><li key={Math.random()} className="list-group-item">
            <a href="#">{tag}</a>
        </li>
        )
    }
  return (
      
    <div>
      <ul className="list-group list-group-horizontal">
        {tagList}
      </ul>
    </div>
  );
};

export default Tags;
