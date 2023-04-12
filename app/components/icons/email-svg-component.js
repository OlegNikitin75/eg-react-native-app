import * as React from "react"
        import Svg, { Path } from "react-native-svg"

        function EmailSvgComponent(props) {
        return (
<Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        >
<Path
clipRule="evenodd"
d="M15.374 12.718l4.506-3.055A2.547 2.547 0 0021 7.552v0A2.551 2.551 0 0018.45 5H5.565a2.55 2.55 0 00-2.55 2.551v0a2.55 2.55 0 001.12 2.112l4.505 3.055a6 6 0 006.733 0v0z"
stroke="#292E33"
strokeLinecap="round"
strokeLinejoin="round"
/>
<Path
d="M3 7.55V17a3 3 0 003 3h12a3 3 0 003-3V7.552"
stroke="#292E33"
strokeLinecap="round"
strokeLinejoin="round"
/>
        </Svg>
        )
        }

        export default EmailSvgComponent
