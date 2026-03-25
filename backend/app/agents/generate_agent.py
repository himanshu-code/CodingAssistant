from app.agents.base_agent import BaseAgent
from app.services.gemini_service import generate_response
from app.core.logger import logger

class GenerateAgent(BaseAgent):
    def __init__(self):
        super().__init__(name="GenerateAgent",description="Agent that generates code snippets based on user queries.")

    def run(self,query:str)->str:
        logger.info(f"Generate Agent Triggered")
        prompt=f"""
        You are an exper frontend Developer specializing in React and Next.js.

        Generate a clean ,Production Ready code based on the user's request.
        Guidelines:
        - Use modern react (functional components + hooks)
        - Use tailwind css for styling
        - keep code clean and readable

        Output format:
        - ONLY return code
        - NO explanation
        - NO markdown

        User Request:{query}
        """
        return generate_response(prompt)