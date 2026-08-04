type FeatureButtonProps = {
    title: string;
  };
  
  function FeatureButton({ title }: FeatureButtonProps) {
    return (
      <button className="feature-btn">
        {title}
      </button>
    );
  }
  
  export default FeatureButton;