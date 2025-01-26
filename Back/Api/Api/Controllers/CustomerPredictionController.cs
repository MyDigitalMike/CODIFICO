using Microsoft.AspNetCore.Mvc;
using Api.Services;
namespace Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CustomerPredictionController : ControllerBase
    {
        private readonly CustomerPredictionService _service;
        public CustomerPredictionController(CustomerPredictionService service)
        {
            _service = service;
        }
        [HttpGet]
        public async Task<IActionResult> GetCustomerPredictions()
        {
            var predictions = await _service.GetCustomerPredictionsAsync();
            return Ok(predictions);
        }
    }
}
