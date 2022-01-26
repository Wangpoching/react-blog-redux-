import { Wrapper, Container } from '../../layout/basicLayout'
import RichTextEditor from '../../components/RichTextEditor'
import { useEffect } from 'react'
import { scrollTop } from '../../utils'
import { getArticlesIfNeeded } from '../../redux/articlesSlice'

function EditPage() {

  useEffect(() => {
    scrollTop()
  }, [])

  return (
    <Wrapper>
      <Container>
        <RichTextEditor />
      </Container>
    </Wrapper>
  )
}

export default EditPage
