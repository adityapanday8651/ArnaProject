import { Button } from "antd";
import React from "react";
import Pdf from "react-to-pdf";
const ref = React.createRef();

function TablePdfDownload(){
   return(
    <div>
      <Pdf targetRef={ref} fileName="CurveMappingTableData.pdf">
        {({ toPdf }) => <Button onClick={toPdf}>Generated Pdf </Button>}
      </Pdf>
      <div ref={ref}>
      <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </div>
  )
}
export default TablePdfDownload;