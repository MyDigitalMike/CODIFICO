using Api.DTOs;

namespace Api.Data.Repositories
{
    public interface ICustomerPredictionRepository
    {
        Task<IEnumerable<CustomerPredictionDto>> GetCustomerPredictionsAsync();
    }
}
