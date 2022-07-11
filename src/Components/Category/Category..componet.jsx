import {
  Samplecategory,
  SamplecategoryContainer,
  SampleCategoriesContainer,
} from './Category.style'

const Category = () => {
  return (
    <SampleCategoriesContainer>
      <h3>Choose a Category</h3>
      <h1>Recipe Categories</h1>
      <SamplecategoryContainer>
        <Samplecategory>
          <h3>nyamnyam</h3>
        </Samplecategory>
        <Samplecategory>
          <h3>nyamnyam</h3>
        </Samplecategory>
        <Samplecategory>
          <h3>nyamnyam</h3>
        </Samplecategory>
        <Samplecategory>
          <h3>nyamnyam</h3>
        </Samplecategory>
        <Samplecategory>
          <h3>nyamnyam</h3>
        </Samplecategory>
      </SamplecategoryContainer>
    </SampleCategoriesContainer>
  )
}

export default Category
