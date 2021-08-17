![image](https://imgur.com/3QnGNEZ.png "PlotGuesserAI Logo")
# PlotGuesserAI 


A simple application using the OpenAI GPT-2 model to *try* and guess what movies are about based on their summaries.

## Usage

Currently the tool is hosted on [THIS](https://plotguesserai.hyperspc.com/) website. Enter the name of your favourite movie and hit 'Try it out' to get started. If the movie couldn't be found, an error message will appear in which case you will need to select a different movie.

Once the movie is found you will see its original prompt (written for box offices) in the top text box. Please give the AI a few moments to generate a follow up.

## How it works

Once you enter a movie name, the tool grabs the movie description from [The Movie Database](https://www.themoviedb.org/) and feeds it to the low-variation model of GPT-2 (117M). After a few moments, a prompt (coherent or otherwise) will appear in the larger text box for your viewing pleasure.

Due to the relatively small dataset this version of the AI works with, the results are sometimes cryptic or incoherent. In my experience, the AI generates something fantastic about 4/10 times. The current parameters fed to the AI are below.

```yaml
# Parameters

top_k: 40

length: 100

temperature: 1
```

### Future Plans
When the larger dataset versions of GPT-2 become readily available, I intend to update the tool with a more accurate AI to yield more exciting results. For now this was a project made in six hours for a hackathon I arrived late at, but who knows what the future holds for PlotGuesserAI!

## License
[MIT](https://choosealicense.com/licenses/mit/)