using Api.Models;

namespace Api.Data.Repositories
{
    public interface IOrderRepository
    {
        Task<IEnumerable<Order>> GetOrdersByCustomerIdAsync(int customerId);
    }
}
