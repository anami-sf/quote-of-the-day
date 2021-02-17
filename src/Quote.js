import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";

export default function Quote({ quote }) {
  return (
    <div className="quoteBox">
      <div className="main">
        <div className="quote">
          <FormatQuoteIcon />
          {quote.body}
        </div>
        <div>{quote.author}</div>
      </div>
      <div className="ratings">
        <div>
          <ThumbUpAltIcon /> {quote.upvotes_count}
        </div>
        <div>
          <ThumbDownAltIcon />
          {quote.downvotes_count}
        </div>
      </div>
      <div></div>
    </div>
  );
}
