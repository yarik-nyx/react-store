import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonFullItem = (props) => (
  <ContentLoader 
    speed={2}
    width={1400}
    height={511}
    viewBox="0 0 1400 511"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="70" y="45" rx="10" ry="10" width="60" height="25" /> 
    <rect x="70" y="0" rx="10" ry="10" width="550" height="35" /> 
    <rect x="70" y="100" rx="10" ry="10" width="450" height="380" /> 
    <rect x="536" y="105" rx="10" ry="10" width="350" height="23" /> 
    <rect x="536" y="140" rx="10" ry="10" width="350" height="23" /> 
    <rect x="536" y="175" rx="10" ry="10" width="350" height="23" /> 
    <rect x="536" y="205" rx="10" ry="10" width="350" height="23" /> 
    <rect x="536" y="238" rx="10" ry="10" width="350" height="23" /> 
    <rect x="536" y="268" rx="10" ry="10" width="350" height="23" /> 
    <rect x="536" y="306" rx="10" ry="10" width="350" height="23" /> 
    <rect x="536" y="340" rx="10" ry="10" width="350" height="23" /> 
    <rect x="536" y="370" rx="10" ry="10" width="350" height="23" /> 
    <rect x="536" y="405" rx="10" ry="10" width="350" height="23" /> 
    <rect x="536" y="440" rx="10" ry="10" width="350" height="23" /> 
    <rect x="955" y="85" rx="10" ry="10" width="140" height="50" /> 
    <rect x="955" y="140" rx="10" ry="10" width="140" height="44" /> 

  </ContentLoader>
)

export default SkeletonFullItem