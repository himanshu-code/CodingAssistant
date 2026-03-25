from app.agents.base_agent import BaseAgent
from app.services.gemini_service import generate_response
from app.core.logger import logger

class ExplainAgent(BaseAgent):
    def __init__(self):
        super().__init__(name="ExplainAgent",description="Agent that explains code snippets and concepts.")

    def run(self,query:str)->str:
        logger.info(f"ExplainAgent received query: {query}")

        prompt=f"""
        You are a senior software engineer.
        Your task is to explain code or programming concepts clearly.

        Guidelines:
        - Keep explanation simple
        - Use examples if helpful
        - structure the answer properly

        Query:{query}
        """
        return generate_response(prompt)
