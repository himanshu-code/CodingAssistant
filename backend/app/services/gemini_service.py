from google import genai
from app.core.config import GEMINI_API_KEY
from app.core.logger import logger
  
client =genai.Client(api_key=GEMINI_API_KEY)

def generate_response(prompt:str)-> str:
    system_prompt="""You are an expert software engineer and coding assistant.
    Help with debugging, explaining code, and generating clean solutions.
    Always give clear, structured, and concise answers."""

    full_prompt=f"{system_prompt}\n user:{prompt}"

    try:
        logger.info(f"Generating response for prompt: {prompt}")
        response=client.models.generate_content(
            model="gemini-2.5-flash",
            contents=full_prompt
        )
        logger.info(f"Received response: {response.text}")
        return response.text if response.text else "No response generated."
    except Exception as e:
        return f"Error:{str(e)}"
