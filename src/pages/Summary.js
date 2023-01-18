import React from 'react'

const Summary = () => {
  return (
    <section className="min-h-screen h-[100vh] bg-gray-900 main overflow-y-auto ml-[256px] z-0 top-0  pt-[80px] pb-[100px] right-0   min-h-[calc(100vh-256px)]  bg-gray-900 px-[50px]" >
   <span class="text-primary mb-4 block text-base font-semibold text-[#48F4FF]">
Project Summary              </span>

<p class="text-body-color mb-9 text-base leading-relaxed text-gray-400">
               First, we'll need to gather a dataset of images and their corresponding captions.
                There are several open source datasets available online that you can use, or you can
                 create your own by manually annotating images. We are using Flickr8k dataset for the same.
</p>
                             
<p class="text-body-color mb-9 text-base leading-relaxed text-gray-400">
Next, we'll need to pre-process the data by resizing the images and tokenizing the captions.
</p>
                                          
<p class="text-body-color mb-9 text-base leading-relaxed text-gray-400">
Then, we'll need to split the data into training and testing sets.
</p>
                             
<p class="text-body-color mb-9 text-base leading-relaxed text-gray-400">
After that, we have to train a deep learning model on the training data. For this step, we are using a convolutional neural network (CNN) as the image encoder and an LSTM as the caption generator. We'll also need to define the loss function and the optimizer that the model will use during training.
</p>

<p class="text-body-color mb-9 text-base leading-relaxed text-gray-400">
Once the model is trained, we can use it to generate captions for the images in the test set and evaluate its performance. 
</p>
                             
<p class="text-body-color mb-9 text-base leading-relaxed text-gray-400">
Finally, we can integrate the model into a web application. We have used Flask for the same, where we are handling the user input (i.e., uploading an image) and displaying the generated caption.
</p>
  </section>
  )
}

export default Summary