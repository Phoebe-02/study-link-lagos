function StatusMessage({ type, onRetry, message }) {
  if (type === "loading") {
    return (
      <p className="status" role="status">
        Loading study spots...
      </p>
    );
  }

  if (type === "error") {
    return (
      <div className="status" role="alert">
        <p>Sorry, we could not load the study spots.</p>
        <button type="button" className="btn" onClick={onRetry}>
          Try again
        </button>
      </div>
    );
  }

  // type === "empty"
  return <p className="empty">{message}</p>;
}

export default StatusMessage;
