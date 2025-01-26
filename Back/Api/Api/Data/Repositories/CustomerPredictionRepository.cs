using Api.Data.Context;
using Api.DTOs;
using Api.Models;
using Microsoft.EntityFrameworkCore;
namespace Api.Data.Repositories
{
    public class CustomerPredictionRepository: ICustomerPredictionRepository
    {
        private readonly ApplicationDbContext _context;
        public CustomerPredictionRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<CustomerPredictionDto>> GetCustomerPredictionsAsync()
        {
            var predictions = await _context.CustomerPredictions
                .FromSqlRaw("EXEC GetNextOrderPrediction")
                .ToListAsync();

            return predictions.Select(p => new CustomerPredictionDto
            {
                CustomerName = p.CustomerName,
                LastOrderDate = p.LastOrderDate,
                NextPredictedOrder = p.NextPredictedOrder
            });
        }
    }
}
