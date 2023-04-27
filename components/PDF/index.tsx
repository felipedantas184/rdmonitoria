import { useState } from 'react';
import { pdfjs } from 'react-pdf'
import { CButton, Controls, DocWrapper, Heading, Section, StyledDoc, StyledPage, StyledPageMobile, Subtitle, Title, Wrapper } from './PDFStyles';
import { BsZoomIn, BsZoomOut } from 'react-icons/bs';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PDFViewer = ({lista}:any) => {
  const [numPages, setNumPages] = useState(0)
  const [pageNumber, setPageNumber] = useState(1)
  const [pageScale, setPageScale] = useState(1.2)

  const onDocumentLoadSucess = ({ numPages }: any) => {
    setNumPages(numPages)
  }
  const prevPage = () => {
    if (pageNumber <= numPages) {
      setPageNumber(pageNumber - 1)
    }
  }
  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1)
    }
  }

  return (
    <Section onContextMenu={(e) => e.preventDefault()} >
      <Wrapper>
        <Heading>
          <Title>{lista.title}</Title>
          <Subtitle>{lista.subject}</Subtitle>
        </Heading>
        <DocWrapper>
          <StyledDoc file={lista.pdfUrl} onLoadSuccess={onDocumentLoadSucess}>
            <StyledPage width={580} scale={pageScale} renderAnnotationLayer={false} renderTextLayer={false} pageNumber={pageNumber} />
            <StyledPageMobile width={320 / 1.2} scale={pageScale} renderAnnotationLayer={false} renderTextLayer={false} pageNumber={pageNumber} />
          </StyledDoc>
        </DocWrapper>
        <Controls>
          <CButton onClick={prevPage} disabled={pageNumber === 1}>Anterior</CButton>
          <p>{pageNumber}/{numPages}</p>
          <CButton onClick={nextPage} disabled={pageNumber === numPages}>Próximo</CButton>
        </Controls>
        <Controls>
          <BsZoomOut style={{cursor: 'pointer'}} size={16} color='#13131A' onClick={() => (setPageScale(pageScale-0.1))} />
          <Subtitle>Zoom</Subtitle>
          <BsZoomIn style={{cursor: 'pointer'}} size={16} color='#13131A' onClick={() => (setPageScale(pageScale+0.1))} />
        </Controls>
      </Wrapper>
    </Section>
  );
}

export default PDFViewer;